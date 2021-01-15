import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import httpStatus from "http-status";

export function validateDTO(dtoClass: any) {
  return function (req: Request, res: Response, next: NextFunction) {
    const output: any = plainToClass(dtoClass, req.body);
    validate(output, { skipMissingProperties: true }).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        let errorTexts = Array();
        for (const errorItem of errors) {
          errorTexts = errorTexts.concat(errorItem.constraints);
        }
        res.status(httpStatus.BAD_REQUEST).send(errorTexts);
        return;
      } else {
        res.locals.input = output;
        next();
      }
    });
  };
};