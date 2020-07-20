# karvi-page-test
Technical test for React frontend developer position at Karvi.

# Requisites
- Node and npm
- Repo cloned

## CI / CD Implementation
After you clone the project, to set up the project smoothly you need to follow the following steps:

1.  Copy `.env.example` located at the root of the project, and replace your the `BASEURL` for you API url.
2. Change `NODE_ENV` file according to your environment (development or production). Rename the file to `.env` if develop or `.env.production` if production.
3. Install needed packages by running on `npm install` when located on the root path of the repository.

### Develop steps
4. If API not up, do recommended extra step (set up json-server mocked API).
5. Run `npm start`. If you have an open browser, it will start a webpack-dev-server on port `8000` automatically.

### Production steps
4. Run `npm run build` to make a build of the project. After completed, it will be located on the `dist/` path.
5. Located on root path, move the folder to your desired path. `mv dist/* [YOUR_REQUESTED_PATH]`.

## Extra
- Added recommended extensions for develop
- To run a server for the API, run `npm run db` when located of the root path of the repository. By default it will use por `4000`, check that your desired `.env` file has the same port added.
