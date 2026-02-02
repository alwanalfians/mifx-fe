import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Landing() {
  return (
    <main className="flex items-center justify-center align-middle min-h-screen">
      <p>
        <span className="text-2xl font-bold">
          Hello! Welcome to this website.
        </span>
        <br />
        <p className="text-l">
          This website was created for the qualification test to become a
          frontend engineer at <span className="font-semibold">MIFX</span>.
        </p>
        <br />
        <a href="/products" className="text-l font-semibold underline">
          click here to go to the main page{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </p>
    </main>
  );
}
