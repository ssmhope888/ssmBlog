import Link from "next/link";

function Breadcrumb({name}) {
  return (
    <div>
      <Link
        href="/"
      >
        <span className="underline">
          Home
        </span>
      </Link>
          <span className="mr-2 ml-2">
            &gt;
          </span>
            <span>
              {name}
            </span>
    </div>
  );

}

export default Breadcrumb;
