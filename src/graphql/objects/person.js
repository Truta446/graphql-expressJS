import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

/*
`type Person {
    id: ID,
    name: String
}`
*/
export default new GraphQLObjectType({
    name: 'Person',
    description: 'Define a Person Object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'Unique ID',
                resolve: (person) => person.id
            },
            name: { 
                type: GraphQLString,
                description: 'Person name',
                resolve: (person) => person.name
            }
        }
    }
});