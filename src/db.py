from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport


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

    # def createParkingLot(self, lot_shape):
