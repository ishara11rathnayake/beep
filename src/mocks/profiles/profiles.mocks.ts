import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
    {
        firstName: 'Ishara',
        lastName: 'Rathnayake',
        email: 'ishara11rathnayake@gmail.com',
        avatar: '',
        dateOfBirth: new Date()
    },

    {
        firstName: 'Sandalu',
        lastName: 'Kalpanee',
        email: 'sandalukalpanee@gmail.com',
        avatar: '',
        dateOfBirth: new Date()
    },

    {
        firstName: 'Lakshan',
        lastName: 'karunathilake',
        email: 'elakshankarunathilake@gmail.com',
        avatar: '',
        dateOfBirth: new Date()
    }

]

export const USER_LIST = userList;