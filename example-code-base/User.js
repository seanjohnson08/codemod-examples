export interface User {
    firstName: String,
    lastName: String
}

export default function getUser(): User {
    console.log('Making a user');
    return { firstName: 'Sean', lastName: 'Johnson' };
}
