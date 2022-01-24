import { NextFunction, Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const prisma: PrismaClient = new PrismaClient();
const router: Router = Router();


// GET all users
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await prisma.user.findMany();
		res.json({ users, totalCount: users.length });
	} catch (error) {
		res.json({ error: 'Unfortunately there was an error fetching users.' });
	}
});


// GET user with id
router.get('/:userId', async (req: Request, res: Response, next: NextFunction) => {
	const { userId } = req.params;

	try {
		const user = await prisma.user.findUnique({
			where: {
				id: Number(userId),
			},
		});
		res.json({ user });
	} catch (error) {
		res.json({ error: `Unfortunately there was an error fetching the user with id ${userId}.` });
	}
});

// CREATE new user
// UPDATE user
// DELETE user

export default router;
