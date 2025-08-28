// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// const PUBLIC_FILE = /\.(.*)$/
// const LOCALES = ['en', 'ar']
// const DEFAULT = 'ar'

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl
//   if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) return
//   const isLocale = LOCALES.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
//   if (!isLocale) {
//     const url = req.nextUrl.clone()
//     url.pathname = `/${DEFAULT}${pathname}`
//     return NextResponse.redirect(url)
//   }
// }
