export const renderHTML = ({ head, styles, root }) =>
  `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head}
    ${styles}
  </head>
  <body>
    <div id="root">
      ${root}
    </div>
  </body>
</html>
`;