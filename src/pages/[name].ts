import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  return env.ASSETS.fetch(new URL("/", url.origin).toString());
};
