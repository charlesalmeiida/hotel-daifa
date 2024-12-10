import BuilderDevTools from "@builder.io/dev-tools/next"
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()(
    BuilderDevTools()(
      BuilderDevTools()({
        images: {
          domains: ["cdn.builder.io"],
        },
        reactStrictMode: true,
      })
    )
  )
)

export default withNextIntl(nextConfig)
