import { useMemo } from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	PinterestShareButton,
	InstapaperShareButton,
} from "react-share";

const ShareLink = ({ path, title, type, children }) => {
	switch (type) {
		case "twitter":
			return (
				<TwitterShareButton url={path}>
					<a
						href="#"
						className="social-icon"
						title={title}
						target="_blank"
					>
						{children}
					</a>
				</TwitterShareButton>
			);
		case "instagram":
			return (
				<InstapaperShareButton url={path}>
					<a
						href="#"
						className="social-icon"
						title={title}
						target="_blank"
					>
						{children}
					</a>
				</InstapaperShareButton>
			);
		case "pinterest":
			return (
				<PinterestShareButton url={path}>
					<a
						href="#"
						className="social-icon"
						title={title}
						target="_blank"
					>
						{children}
					</a>
				</PinterestShareButton>
			);
		default:
			return (
				<FacebookShareButton url={path}>
					<a
						href="#"
						className="social-icon"
						title={title}
						target="_blank"
					>
						{children}
					</a>
				</FacebookShareButton>
			);
	}
};

export default ShareLink;
