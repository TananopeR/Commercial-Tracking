import { Controller, Get,UseGuards,Req,HttpStatus } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller('facebook')
export class FacebookController {

  @Get()
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }
}
