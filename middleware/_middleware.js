// // import  { NextFetchEvent, NextRequest } from 'next/server'
// import { NextResponse } from "next/server";

// export function middleware(req, ev) {
//   console.log('fired');
//   const ContentSecurityPolicy = `
//       default-src 'self';
//       script-src 'self' 'unsafe-eval';
//       child-src example.com;
//       style-src 'self' example.com;
//       font-src 'self'; 
//     `;

//   const response = NextResponse.next();

//   response.headers.set(
//     "Content-Security-Policy",
//     ContentSecurityPolicy.replace(/\n/g, "")
//   );
//   response.headers.set("X-Frame-Options", "deny");
//   response.headers.set("X-Content-Type-Options", "nosniff");
//   response.headers.set("Referrer-Policy", "strict-origin");
//   response.headers.set(
//     "Strict-Transport-Security",
//     "max-age=31536000; includeSubDomains; preload"
//   ); 
//   response.headers.set("X-XSS-Protection", "1; mode=block");
//   response.headers.set( 
//     "Permissions-Policy",
//     "camera=(self); battery=(); geolocation=(); microphone=()"
//   );

//   return response;
// }
