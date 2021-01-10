from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

insertLotRowMutation = gql(
    """
    mutation InsertLotRowMutation($id: Int!) {
        insert_lot_row_one(object: {
            parking_lot_id: $id
        }){
            id
            parking_lot_id
        }
    }
    """
)

insertParkingSpacesMutation = gql(
    """
    mutation InsertParkingSpaceMutation($spaces: [parking_space_insert_input!]!) {
        insert_parking_space(objects: $spaces) {
            affected_rows
        }
    }
    """
)

deleteRowsMutation = gql(
    """
    mutation DeleteRowsMutation($id: Int!) {
        delete_lot_row(where: {parking_lot_id:{_eq: $id}}){
            affected_rows
        }
    } 
    """
)


class db():
    def __init__(self):
        self.transport = AIOHTTPTransport(
            url="http://localhost:8080/v1/graphql")
        self.client = Client(transport=self.transport,
                             fetch_schema_from_transport=True)

    def pingDB(self):
        query = gql(
            """
            query getParkingLots {
                parking_lot{
                    id
                }
            }
        """
        )
        # Execute the query on the transport
        result = self.client.execute(query)
        print(result)

    def createParkingLot(self, lot_shape, lot_id):
        # Clear lot
        self.client.execute(deleteRowsMutation,
                            variable_values={"id": lot_id + 2})

        def getRotation(park_item, lot_id):
            if (park_item == "R" and lot_id == 1):
                return 90
            elif (lot_id == 2 and (park_item == "E" or park_item == "F")):
                return 45
            else:
                return 0

        processed_space = []
        for row in lot_shape:
            # Create the row
            result = self.client.execute(
                insertLotRowMutation, variable_values={"id": lot_id + 2})
            lot_row_id = result["insert_lot_row_one"]["id"]
            row_items = []

            # Fill the row
            for space_id, park_item in row:
                item = {
                    "is_driver_disabled_parking": False,
                    "is_disabled": False,
                    "is_occupied": park_item == "F",
                    "is_space": park_item == "E",
                    "is_road": park_item == "R",
                    "is_entry": False,
                    "is_exit": False,
                    "is_blank": park_item == 'B',
                    "rotation":  getRotation(park_item, lot_id),
                    "lot_row_id": lot_row_id,
                    "space_id": space_id
                }

                row_items.append(item)
            processed_space.append(row_items)

        for r in processed_space:
            self.client.execute(
                insertParkingSpacesMutation, variable_values={"spaces": r})

        print("Wrote to database")
