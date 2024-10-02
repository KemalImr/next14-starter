import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Blog",
            path: "/blog",
        },

    ];

    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.key}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links