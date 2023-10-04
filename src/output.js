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

    case "nest @Request ":
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

    case "nest status code ":
      return `
      <p> @Post() </p>
      <p> @HttpCode(204) </p>
      <p> create() { </p>
        <p> return 'This action adds a new cat'; </p>
      <p> } </p>`;

    case "nest header":
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

    case "nest route @param":
      return `
      <p> @Get(':id') </p>
      <p> findOne(@Param() params: any): string { </p>
        <p> console.log(params.id); </p>
        <p> return 'This action returns a # "param.id" cat'; <p>
      <p> } </p>`;

    case "nest subdomain route":
      return `
      <p style="color: green"> @Controller({ host: 'admin.example.com' }) </p>
      <p> export class AdminController { </p>
        <p> @Get() </p>
        <p> index(): string { </p>
          <p> return 'Admin page'; </p>
        <p> } </p>
      <p> } </p>`;

    case "nest subdomain route @HostParam":
      return `
      <p style="color: green"> @Controller({ host: ':account.example.com' }) <p>
      <p> export class AccountController { </p>
        <p> @Get() </p>
        <p> getInfo(@HostParam('account') account: string) { </p>
          <p> return account; </p>
        <p> } </p>
      <p> } </p>
      `;

    case "nest Asynchronicity":
      return `
      <p> @Get() </p>
      <p> findAll(): Observable<any[]> { </p>
        <p> return of([]); </p>
      <p> } </p>`;

    case "nest dto":
      return `
      <p style="color: green"> export class CreateCatDto { </p>
        <p> name: string;</p>
        <p> age: number;</p>
        <p> breed: string;</p>
      <p> } </p>

      <p style= "color: yellow"> use in the controller</p>
      <p> @Post() </p>
      <p> async create(@Body() createCatDto: CreateCatDto) { </p>
      <p> return 'This action adds a new cat'; </p>
      <p> } </p>
      `;

    case "nest service ex":
      return `
      <p style="color: green"> import { Injectable } from '@nestjs/common'; </p>
      <p style="color: green">import { Cat } from './interfaces/cat.interface';</p>

      <p style="color: yellow"> @Injectable() </p>
      <p> export class CatsService { </p>
      <p> private readonly cats: Cat[] = []; </p>

      <p> create(cat: Cat) { </p>
      <p> this.cats.push(cat); </p>
      <p> } </p>

      <p> findAll(): Cat[] { </p>
      <p> return this.cats; </p>
      <p> } <p>
      <p> } <p>
      `;

    case "nest constructor":
      return `<p style="color : yellow"> constructor(private catsService: CatsService) {} <p>`;

    case "nest optional provider":
      return `
      <p style="color: green"> import { Injectable, Optional, Inject } from '@nestjs/common'; </p>

      <p style="color: yellow"> @Injectable() </p>
      <p> export class HttpService<T> { </p>
         <p> constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {} </p>
      <p> } </p>`;

    case "nest property-base injection":
      return `
      <p style="color: green"> import { Injectable, Inject } from '@nestjs/common'; </p>

      <p style="color: yellow"> @Injectable() </p>
      <p> export class HttpService<T> { </p>
        <p style="color: yellow"> @Inject('HTTP_OPTIONS') </p>
        <p> private readonly httpClient: T; </p>
      <p> } </p>`;

    case "nest provider":
      return `
      <p style="color: green"> import { Module } from '@nestjs/common';</p>
      <p style="color: green"> import { CatsController } from './cats/cats.controller';</p>
      <p style="color: green"> import { CatsService } from './cats/cats.service';</p>

      <p> @Module({ </p>
        <p> controllers: [CatsController],</p>
        <p> providers: [CatsService], </p>
             <p> }) </p>
        <p> export class AppModule {} </p>`;

    case "nest HttpException":
      return `<p> throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); </p>`;

    case "nest BadRequestException":
      return `<p> throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' }) </p>`;

    case "nest http-exception.filter":
      return `
      <p style="color: green"> import { Catch, HttpException } from '@nestjs/common'; </p>

      <p> @Catch(HttpException) </p>
      <p> export class HttpExceptionFilter { </p>
      <p> catch(exception, host) { </p>
      <p> const ctx = host.switchToHttp(); </p>
      <p> const response = ctx.getResponse(); </p>
      <p> const request = ctx.getRequest(); </p>
      <p> const status = exception.getStatus(); </p>

      <p> response </p>
        <p> .status(status) </p>
        <p> .json({ </p>
          <p> statusCode: status, </p>
          <p> timestamp: new Date().toISOString(), </p>
          <p> path: request.url, </p>
        <p> }); </p>
        <p> } </p>
      <p> } </p>


      <p>use of filter in controller</p>
      <p style="color: yellow"> @Post() <p>
      <p> @UseFilters(new HttpExceptionFilter()) </p>
      <p> @Bind(Body()) </p>
      <p> async create(createCatDto) { </p>
      <p> throw new ForbiddenException(); </p>
      <p> } </p>
      `;

    case "nest ParseIntPipe":
      return `
      <p> @Get(':id') </p>
      <p> async findOne( </p>
        <p> @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) </p>
        <p> id: number, </p>
      <p> ) { </p>
        <p> return this.catsService.findOne(id); </p>
      <p> } </p>`;

    case "nest ParseUUIDPipe":
      return `
      <p> @Get(':uuid') </p>
      <p> async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) { </p>
        <p> return this.catsService.findOne(uuid); </p>
      <p> } </p>`;

    case "nest ValidationPipe":
      return `
      <p style="color: green"> import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'; </p>

      <p style="color: yellow"> @Injectable() </p>
      <p> export class ValidationPipe implements PipeTransform { </p>
        <p> transform(value: any, metadata: ArgumentMetadata) { </p>
          <p> return value; </p>
        <p> } </p>
      <p> } </p>
      

      <p style="color: green"> metadata for use</p>
      <p> export interface ArgumentMetadata { </p>
        <p> type: 'body' | 'query' | 'param' | 'custom'; </p>
        <p> metatype?: Type<unknown>; </p>
        <p> data?: string; </p>
      <p> } </p>`;

    case "nest Object schema validation":
      return `
        // install zod first
        <h1 style="color :red"> npm install --save zod </h1> 

        <p style="color: green"> import { BadRequestException } from '@nestjs/common'; </p>
        <p style="color: green"> import { ZodObject } from 'zod'; </p>

        <p> export class ZodValidationPip { </p>
        <p style="color: yellow"> constructor(private schema) {} </p>

        <p> transform(value, metadata) { </p>
        <p> try { </p>
        <p> this.schema.parse(value); </p>
        <p> } catch (error) { </p>
        <p> throw new BadRequestException('Validation failed'); </p>
        <p> } </p>
        <p> return value; </p>
        <p> } </p>
        <p> } </p>


        <p>object file for validation</p>
        <p style="color: green"> import { z } from 'zod'; </p>

        <p> export const createCatSchema = z </p>
        <p> .object({ </p>
        <p> name: z.string(), </p>
        <p> age: z.number(), </p>
        <p> breed: z.string(), </p>
        <p> }) </p>
        <p> .required(); </p>

        <p> export type CreateCatDto = z.infer<typeof createCatSchema>; </p>

        <p> use in the controller</p>
        <p> @Post() </p>
        <p> @Bind(Body()) </p>
        <p> @UsePipes(new ZodValidationPipe(createCatSchema)) </p>
        <p> async create(createCatDto) { </p>
        <p> this.catsService.create(createCatDto); </p>
        <p> } </p>

        `;

    default:
      return "good to see you";
  }
};
