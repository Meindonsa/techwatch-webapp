import api from '@/shared/api/axiosInstance.ts'
import { Configuration, SourceApi } from '@meindonsa/chat-api'
import type { AxiosResponse } from 'axios'
import type { PaginatedRequest } from '@meindonsa/chat-api/models'

const sourceApi = new SourceApi(new Configuration(), undefined, api)

export const SourceService = {
  async retrieveSources(req: any): Promise<AxiosResponse> {
    const request: PaginatedRequest = req
    return sourceApi.retrieveSources(request)
  },
}