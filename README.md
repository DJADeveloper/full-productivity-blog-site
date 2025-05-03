# AI Productivity Blog

A modern, high-performing static blog site built with Astro, focused on AI-powered productivity tools and systems for entrepreneurs.

## Features

- 🚀 Built with Astro for optimal performance
- 💅 Styled with TailwindCSS
- 📝 Markdown-based blog posts
- 📧 Beehiiv newsletter integration
- 🛍️ Gumroad product integration
- 📱 Fully responsive design
- 🔍 SEO optimized
- 📰 RSS feed support
- 🗺️ Sitemap generation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-productivity-blog.git
   cd ai-productivity-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable components
├── content/        # Blog posts and other content
├── layouts/        # Page layouts
├── pages/          # Astro pages
├── styles/         # Global styles
└── public/         # Static assets
```

## Customization

1. Update the `src/content/blog` directory with your blog posts
2. Replace the beehiiv embed code in the components with your own
3. Update the Gumroad links in the store page
4. Customize the color scheme in `tailwind.config.mjs`
5. Update the about page with your personal information

## Deployment

This site is configured for deployment on Vercel. Simply connect your repository to Vercel and it will automatically deploy your site.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
