import trae from 'trae'
import configService from './config'

const platziMusicServices = trae.create({
	baseUrl: configService.apiUrl 
})

export default platziMusicServices