const appDataSource = require("./orm");


const findUserToFrofileId = async ( id ) => {
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

const signIn = async ( id ) => {
    try {
        const [user] = await appDataSource.query(
            `SELECT
                *
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


const createUser = async ( id, nickname, password, birthday, image) => {
    try {
        return await appDataSource.query(
            `INSERT INTO users(
                profile_id,
                profile_nickname,
                password,
                birthday,
                profile_image
            ) VALUES (?, ?, ?, ?, ?)
            `,
            [ id, nickname, password, birthday, image ]
        );
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
};

const searchAnyId = async ( id ) => {
    try {
        return await appDataSource.query(
            `SELECT
                profile_id,
                id,
                comment
            FROM users
            WHERE profile_id LIKE "%?%"`,
            [ id ]
        )
    } catch(err){
        const error = new Error("INVALID_DATA_INPUT");
        error.statusCode = 500;
        throw error;
    }
}

module.exports = {
    signIn,
    findUserToFrofileId,
    createUser,
    searchAnyId
}