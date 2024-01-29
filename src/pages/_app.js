import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
export default function App({ Component, pageProps }) {
  return (
    <AntdRegistry>
      <Component {...pageProps} />
    </AntdRegistry>
  );
}
