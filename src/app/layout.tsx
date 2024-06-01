export default function RootLayout(props: any) {
  console.log(1, Object.keys(props));
  return (
    <html lang="en">
      <body>
        {props.children}
        <div>
          <h1>Parallel:</h1>
          <div>
            {props.article}
            {props.settings}
          </div>
        </div>
      </body>
    </html>
  );
}
