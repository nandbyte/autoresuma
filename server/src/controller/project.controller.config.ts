import { CommonControllerConfig } from '../common/common.controllers.config'
import Project from '../models/project'
import { v4 as uuidv4 } from 'uuid'
import { Request, Response } from 'express'

class ProjectController extends CommonControllerConfig {
    create = async (req: Request, res: Response) => {
        try {
            const id = uuidv4()
            const record = await Project.create({ ...req.body, id })

            return res.json({
                status: 200,
                msg: 'OK',
                route: '/v1/project',
                record,
            })
        } catch (error: any) {
            return res.json({
                status: 500,
                msg: error.message,
                route: '/v1/project',
            })
        }
    }

    getAll = async (req: Request, res: Response) => {
        const uid = req.params.userId
        try {
            const record = await Project.findAll({
                where: {
                    userId: uid,
                },
            })

            if (!record) {
                return res.json({ data: [] })
            }
            return res.json({
                status: 200,
                msg: 'OK',
                route: '/v1/project',
                record,
            })
        } catch (error: any) {
            return res.json({
                status: 500,
                msg: error.message,
                route: '/v1/project',
            })
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId
            const projectId = req.params.projectId
            const record = await Project.findOne({
                where: {
                    id: projectId,
                    userId: uid,
                },
            })

            if (!record) {
                return res.json({
                    status: 204,
                    msg: 'NO CONTENT',
                    route: '/v1/project/:userId/:projectId',
                })
            }

            return res.json({
                status: 200,
                msg: 'OK',
                route: '/v1/project/:userId/:projectId',
                record,
            })
        } catch (error: any) {
            return res.json({
                status: 500,
                msg: error.message,
                route: '/v1/project/:userId/:projectId',
            })
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId
            const projectId = req.params.projectId

            const record = await Project.findOne({
                where: {
                    id: projectId,
                    userId: uid,
                },
            })

            if (!record) {
                return res.json({
                    status: 204,
                    msg: 'NO CONTENT',
                    route: '/v1/project/:userId/:projectId',
                })
            }

            const newRec = await record.update({ ...req.body })
            return res.json({
                status: 200,
                msg: 'OK',
                route: '/v1/project/:userId/:projectId',
                newRec,
            })
        } catch (error: any) {
            return res.json({
                status: 500,
                msg: error.message,
                route: '/v1/project/:userId/:projectId',
            })
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId
            const projectId = req.params.projectId
            const record = await Project.findOne({
                where: {
                    id: projectId,
                    userId: uid,
                },
            })

            if (!record) {
                return res.json({
                    status: 204,
                    msg: 'NO CONTENT',
                    route: '/v1/project/:userId/:projectId',
                })
            }
            await record.destroy({ ...req.body })
            return res.json({
                status: 200,
                msg: 'OK',
                route: '/v1/project/:userId/:projectId',
            })
        } catch (error: any) {
            return res.json({
                status: 500,
                msg: error.message,
                route: '/v1/project/:userId/:projectId',
            })
        }
    }
}

export default new ProjectController()
