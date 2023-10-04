export const output = (input, number) => {
  switch (input) {
    case "hello":
      console.log("in the if condition");
      return "Hello sir";

    case "null":
      return "good to see you";

    case "time":
      return new Date();

    case "date":
      return new Date().getDate();

    case "day":
      return new Date().getDay();

    case "year":
      return new Date().getFullYear();

    case "month":
      return new Date().getMonth();

    case "hour":
      return new Date().getHours();

    case "minute":
      return new Date().getMinutes();

    case "sec":
      return new Date().getSeconds();

    case "log":
      return console.log(number);

    case "random number":
      return Math.floor(Math.random() * number);

    case "what is your name":
      return "my name is persnal assistant.";

    case "help":
      return "what help you will be want?";

    case "about":
      return "you are in the dashboard portal of the robotec. here you find many things like who will devlop, what services we have what will they work, how will they help you. enjoy your journey in the portal.";

    case "service":
      return "Go to the main menu, then click on services here you can found service that help you in regular life";

    case "Home":
      return "click on Home if you want to home page.";

    case "button UI":
      return "<pre><code>&lt;button&gt;click&lt;/button&gt;</code></pre><button>click</button>";

    case "division UI":
      return "<pre><code>&lt;div&gt;Hello&lt;/div&gt;</code></pre><div>Hello</div>";

    case "table UI":
      return `
      <pre><code>
      &lt;table&gt;
        &lt;tr&gt
            &lt;th&gt Header 1 &lt;/th&gt
            &lt;th&gtHeader 2 &lt;/th&gt
            &lt;th&gtHeader 3&lt;/th&gt
        &lt;/tr&gt
        &lt;tr&gt
        &lt;td&gt 1, Cell 1&lt;/td&gt
            &lt;td&gt 1, Cell 2&lt;/td&gt
            &lt;td&gt 1, Cell 3&lt;/td&gt
        &lt;/tr&gt
        &lt;tr&gt
            &lt;td&gt 2, Cell 1&lt;/td&gt
            &lt;td&gt 2, Cell 2&lt;/td&gt
            &lt;td&gt 2, Cell 3&lt;/td&gt
        &lt;/tr&gt
        &lt;tr&gt
            &lt;td&gt 3, Cell 1&lt;/td&gt
            &lt;td&gt 3, Cell 2&lt;/td&gt
            &lt;td&gt 3, Cell 3&lt;/td&gt
        &lt;/tr&gt
    &lt;/table&gt
  </code>   
  </pre>
  <table border="1">
  <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
  </tr>
  <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
  </tr>
  <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
  </tr>
  <tr>
      <td>Row 3, Cell 1</td>
      <td>Row 3, Cell 2</td>
      <td>Row 3, Cell 3</td>
  </tr>
</table>`;
    case "order list UI":
      return `
      <code><pre>
      &lt;ol&gt
      &lt;li&gtItem 1&lt;/li&gt
      &lt;li&gtItem 2&lt;/li&gt
      &lt;li&gtItem 3&lt;/li&gt
    &lt;/ol&gt
      </pre></code>
     
    <ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>`;

    case "unordered list UI":
      return `<code><pre>
    &lt;ul&gt
      &lt;li&gtItem 1&lt;/li&gt
      &lt;li&gtItem 2&lt;/li&gt
      &lt;li&gtItem 3&lt;/li&gt
    &lt;/ul&gt
      </pre></code>
     
    <ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;
    default:
      return "good to see you";
  }
};
