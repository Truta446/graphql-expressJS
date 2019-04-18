import { GraphQLSchema, GraphQLObjectType } from 'graphql'

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: mutations
    }) 
})