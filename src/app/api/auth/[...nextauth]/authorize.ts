export default async (credentials: { username: string; password: string; }) => {
    const user = { id: "42", username: "Dave", password: "nextauth" };
    if (credentials?.username === user.username && credentials?.password === user.password)
    {
        return user;
    }
    return null;
}
