import { GraphQLList } from 'graphql';
import PersonObject from './../objects/person';
import Person from './../../models/Person';

/*
`type Query {
    find: [PersonObject]
}`
*/
export default {
    type: new GraphQLList(PersonObject),
    resolve: async () => {
        const result = await Person.find({});
        return result;
    }
}