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

    case "form UI":
      return ` 
      <code><pre>
      &lt;form action="/submit" method="post"&gt;
        &lt;label for="name"&gt;Name:&lt;/label&gt;
        &lt;input type="text" id="name" name="name" required&gt;&lt;br&gt;&lt;br&gt;
        
        &lt;label for="email"&gt;Email:&lt;/label&gt;
        &lt;input type="email" id="email" name="email" required&gt;&lt;br&gt;&lt;br&gt;
        
        &lt;label for="message"&gt;Message:&lt;/label&gt;&lt;br&gt;
        &lt;textarea id="message" name="message" rows="4" cols="50" required&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;
        
        &lt;input type="submit" value="Submit"&gt;
      &lt;/form&gt;
    </pre></code>
    
  
    <form action="/submit" method="post">
       <label for="name">Name:</label>
       <input type="text" id="name" name="name" required><br><br>
       
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" required><br><br>
       
       <label for="message">Message:</label><br>
       <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
       
       <input type="submit" value="Submit">
   </form>
   `;

    case "nest install cli":
      return `npm i -g @nestjs/cli`;

    case "nest generate project":
      return `nest new project-name`;

    case "nest main.ts ex":
      return `
      <p style="color:green">import { NestFactory } from '@nestjs/core';</p>
      <p style="color:green">import { AppModule } from './app.module';</P>
      
      <P>async function bootstrap() {</P>
      <P> const app = await NestFactory.create(AppModule);</P>
      <P> await app.listen(3000);</P>
      <P>  }</P>
      <P>
      bootstrap();</P>`;

    case "nest run project":
      return `npm run start:dev`;

    case "nest app.controller ex":
      return `
      <p style="color:green">import { Controller, Get } from '@nestjs/common';</p>
      <p> @Controller('cats')</P>
      <p> export class CatsController { </p>
      <p> @Get() </p>
      <p> findAll(): string { </p>
      <p>  return 'This action returns all cats'; </p>
      <p> } </p>
      <p> } </p>`;

    case "nest @Request ex":
      return ` 
      <p style="color:green"> import { Request } from 'express'; </p>
      <p> @Get() </p>
      <p> findAll(@Req() request: Request): string { </p>
      <p> return 'This action returns all cats'; </p>
      <p> } </p>`;

    case "nest route":
      return `
      <p style="color:green"> 'get/all' is route here </p>
      <p> @Get('get/all') </p>
      <p> findAll() { </p>
        <p> return 'This route uses a wildcard'; </p>
      <p> } </p>`;

    case "nest status code ex":
      return `
      <p> @Post() </p>
      <p> @HttpCode(204) </p>
      <p> create() { </p>
        <p> return 'This action adds a new cat'; </p>
      <p> } </p>`;

    case "nest header ex":
      return `
      <p> @Post() </p>
      <p> @Header('Cache-Control', 'none') </p>
      <p> create() { </p>
      <p> return 'This action adds a new cat'; </p>
      <p> } </p>
      `;

    case "nest redirection":
      return `
      <p> @Get() </p>
      <p> @Redirect('https://nestjs.com', 301) </p>
      <P> getDocs(@Query('version') version) { </P>
        <P> if (version && version === '5') { </P>
        <P> return { url: 'https://docs.nestjs.com/v5/' }; </P>
        <P> } </P>
      <P> } </P>
      `;

    default:
      return "good to see you";
  }
};
