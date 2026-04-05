export const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings"][0]{
    name,
    tagline,
    description,
    logo,
    logoAlt,
    nav[]{ label, href },
    primaryCta{ label, href }
  }
`;

export const heroQuery = /* groq */ `
  *[_type == "hero"][0]{
    headline,
    sub,
    backgroundImage,
    theme,
    primaryCta{ label, href },
    secondaryCta{ label, href },
    brandMarqueeEyebrow,
    brandMarqueeBrands[]{ name, logo, url, invert }
  }
`;
