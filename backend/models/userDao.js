const appDataSource = require("./orm");

const signIn = async ( id ) => {
    try {
        const [user] = await appDataSource.query(
            `SELECT
                id,
                password
            FROM users
            WHERE profile_id = ? `,
            [id]
        );
        return user;
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const findUser = async ( id ) => {
    try {
        const [user] = await appDataSource.query(`
            SELECT 
                *
            FROM users
            WHERE profile_id = ? `,
            [id]
        )
        return user
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const createUser = async ( id, password, birthday) => {
    try {
        return await appDataSource.query(
            `INSERT INTO users(
                profile_id,
                password,
                birthday
            ) VALUES (?, ?, ?)
            `,
            [ id, password, birthday ]
        );
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
};

module.exports = {
    signIn,
    findUser,
    createUser
}