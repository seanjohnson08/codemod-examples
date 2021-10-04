import getUser, { User } from './User';

interface Post {
    user: User,
    message: string
}

function getPost(): Post {
    console.log('Making a user');
    return { user: getUser(), message: 'Hello' };
}


console.log(getPost());
