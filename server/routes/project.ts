import { NextFunction, Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const prisma: PrismaClient = new PrismaClient();
const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const projects = await prisma.project.findMany();
		res.json({ projects, totalCount: projects.length });
	} catch (error) {
		res.json({ error: 'Unfortunately there was an error fetching projects of user.' });
	}
});

export default router;
