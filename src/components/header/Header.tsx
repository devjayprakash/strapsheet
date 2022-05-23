import Head from 'next/head';

interface HeaderProps {
    title: string;
    tags?: string[];
    description?: string;
}

let Header: React.FC<HeaderProps> = ({
    title,
    tags = ['strapsheet'],
    description = 'strapsheet | website to compare tech',
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={tags.join(',').toString()} />
        </Head>
    );
};

export default Header;
