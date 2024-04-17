import { Router, Request, Response, NextFunction } from "express";

const SampleRoutes = Router();

SampleRoutes.use(
    '*',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            next();
        } catch (error) {
            next(error);
        }
    }
);

// router.route('/')
//     .get(ValidatorMiddleware(diningValidator.list), diningController.list)
//     .post(ValidatorMiddleware(diningValidator.createDining), filevalidationMiddleware.verifyOwnership("images", undefined, true), diningController.create)

export default SampleRoutes;
