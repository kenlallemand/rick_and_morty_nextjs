import { PAGINATION_COMPLEMENT } from "@/constants";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
	actualPage: number;
	complement: string;
};
const Pager: FC<Props> = ({ actualPage, complement }) => {
	return (
		<nav
			aria-label="Page navigation"
			className="grtid grid-cols-2 place-content-center"
		>
			<ul className="inline-flex ">
				<li>
					<Link
						href={`/${complement}${Number(actualPage) - 1}`}
						className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Previous
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						{actualPage}
					</Link>
				</li>
				<li>
					<Link
						href={`/${complement}${Number(actualPage) + 1}`}
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Next
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Pager;
