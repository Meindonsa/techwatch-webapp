import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import { type PaginatedRequest, type SourceView } from '@meindonsa/techwatch-api/models'
import { SourceApi } from '@meindonsa/techwatch-api/api'
import { Configuration } from '@meindonsa/techwatch-api/configuration'

const sourceApi = new SourceApi(new Configuration(), undefined, api)

export const SourceService = {
  async retrieveSources(req: any): Promise<AxiosResponse> {
    const request: PaginatedRequest = req
    return sourceApi.retrieveSources(request)
  },

  async createSource(req: any): Promise<AxiosResponse> {
    const request: SourceView = req;
    return sourceApi.createSource(request)
  }
}