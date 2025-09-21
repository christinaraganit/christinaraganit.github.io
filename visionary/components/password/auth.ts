"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Authenticate(data: FormData) {
    const password = data.get("password");
    const url = (data.get("url") as string) ?? "/";
    console.log(url);


    // TODO, optionally hash the cookie, optionally hash with current date to set time limit, or better yet use JWT
    if (password === process.env.SNEAKY_PASSWORD) {
        const _cookieJar = await cookies();
        _cookieJar.set("secret", process.env.COOKIE_SECRET!);
        redirect(url);
    }
    return true;
}