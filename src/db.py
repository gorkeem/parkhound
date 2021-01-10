from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

testPark = [[-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9,
             -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, ],
            [0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,
             0,  0, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, ],
            [1,  1,  0,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,
             0,  0,  0,  0,  0,  0,  1, -9, -9, -9, -9, -9, -9, -9, ],
            [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9,
             -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, ],
            [1,  0,  0,  0,  0,  0,  1,  0,  0,  1,  1,  0,  1,  0,  0,  0,  0,  0,
             0,  0,  0,  0,  0,  0,  0,  0,  0, -9, -9, -9, -9, -9, ],
            [1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
             0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -9, -9, -9, ],
            [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9,
             -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, ],
            [1,  0,  0,  1,  0,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,
             0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -9, -9, ],
            [1,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,
             0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, ],
            [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9,
             -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, ],
            [0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,
             0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -9, ],
            [1,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0,  1,  0,  1,  1,  1,  0,  0,
             0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0, -9, ],
            [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9,
             -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, ]]

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

    def createParkingLot(self, lot_shape):
        lot_space_id = 1
        for row in lot_shape:
            # Create the row
            result = self.client.execute(
                insertLotRowMutation, variable_values={"id": 3})
            lot_row_id = result["insert_lot_row_one"]["id"]
            row_items = []

            # Fill the row
            for park_item in row:
                item = {
                    "is_driver_disabled_parking": False,
                    "is_disabled": False,
                    "is_occupied": park_item == 0,
                    "is_space": park_item != 'B',
                    "is_road": False,
                    "is_entry": False,
                    "is_exit": False,
                    "is_blank": park_item == 'B',
                    "rotation": 0,
                    "lot_row_id": lot_row_id,
                    "space_id": lot_space_id if park_item != -9 else None
                }
                if (park_item != -9):
                    lot_space_id += 1

                row_items.append(item)

            self.client.execute(
                insertParkingSpacesMutation, variable_values={"spaces": row_items})


testDB = db()
testDB.createParkingLot(testPark)
