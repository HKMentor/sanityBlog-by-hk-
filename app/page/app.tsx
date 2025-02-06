import { CartProvider } from "../component/CartContext"; // Adjust path if needed
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
