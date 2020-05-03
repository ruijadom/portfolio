import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'assets/thumbnail/thumbnail.png';
import { defaultTitle, logo, legalName, siteUrl, defaultDescription, socialLinks, social, address, contact } from 'data/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{
    "@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
    "url": "${siteUrl}",
    "logo": "${logo}",
    "contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressCountry": "${address.country}",
		},
		"sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socsocialLinksial.github}"
		]
  }`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${siteUrl}${location}/?ref=ruijadomingues.netlify.app`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}