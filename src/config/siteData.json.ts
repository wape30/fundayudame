export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Fundacion Ayudame a Ayudarme",
	// Your website's title and description (meta fields)
	title: "Fundacion Ayudame a Ayudarme",
	description:
		"Nuestra fundación nace del profundo deseo de crear un mundo más inclusivo y justo para todos, especialmente para los niños y niñas con discapacidad. Creemos que cada niño merece la oportunidad de desarrollar todo su potencial y vivir una vida plena.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Wilson Caicedo",
		email: "wape30@gmail.com",
		twitter: "wincrox",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/logo.png",
		alt: "Fundayudame logo",
	},
};

export default siteData;
