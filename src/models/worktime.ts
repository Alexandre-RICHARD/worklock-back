import {dbRequestExecuter} from "./../database";

export const worktimeModel = {
    "getAllWorkTimeData": async () => {
        try {
            const results = await dbRequestExecuter("SELECT * FROM user_data");
            return results;
        } catch (err) {
            console.trace(err);
        }
        return null;
    },
};
