import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left text-sm sm:text-base">
          <p className="mb-4">
            We pay respect to the Traditional Custodians and First Peoples of
            NSW, and acknowledge their continued connection to their country and
            culture.
          </p>
          <hr className="my-4 border-gray-700" />
          <nav className="flex flex-wrap justify-start gap-4 mb-4">
            <Link className="hover:text-gray-300 underline" href="#">
              Accessibility
            </Link>
            <Link className="hover:text-gray-300 underline" href="#">
              Copyright
            </Link>
            <Link className="hover:text-gray-300 underline" href="#">
              Disclaimer
            </Link>
            <Link className="hover:text-gray-300 underline" href="#">
              Privacy
            </Link>
            <Link className="hover:text-gray-300 underline" href="#">
              Content sources
            </Link>
            <Link className="hover:text-gray-300 underline" href="#">
              RSS
            </Link>
            <Link className="hover:text-gray-300 underline" href="#">
              Contact us
            </Link>
          </nav>
          <div className="my-4 " />
          <p className="text-xs sm:text-sm w-full text-center">
            Copyright © 2019
          </p>
        </div>
      </div>
    </footer>
  );
}
