import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication
{
    public static passwordHash = (plain_password: string) : Promise<string> => {
        return bcrypt.hash(plain_password, 10);
    }

    public static passwordCompare = async (plain_password: string, hash_password: string) : Promise<boolean> => {
        let result = await bcrypt.compare(plain_password, hash_password);

        return result;
    }

    public static generateToken = (id: number, username: string): string => {
        const secret_key: string = process.env.JWT_SECRET || "secret";

        const token: string = jwt.sign({ id, username }, secret_key)

        return token;
    }
}

export default Authentication;