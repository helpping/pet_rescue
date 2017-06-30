import Vue from 'vue'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
Vue.use(Router)
Vue.use(VueTouch, {name: 'v-touch'})
//首页
import Index from '@/components/Index'
//新闻
import News from '@/components/News'
import NewsDetail from '@/components/NewsDetail'
//萌图
import CuteFigure from '@/components/CuteFigure'
import CuteDetail from '@/components/CuteDetail'
import CutePush from '@/components/CutePush'
//个人信息
import UserInformation from '@/components/UserInformation'
import MyAdoption from '@/components/MyAdoption'
import FindInformation from '@/components/FindInformation'
import UpdateInformation from '@/components/UpdateInformation'
//领养
import Adopt from '@/components/Adopt'
import AdoptInfo from '@/components/AdoptInfo'
import AdoptDetail from '@/components/AdoptDetail'

//找回信息
import Seek from '@/components/Seek'
import SeekDetail from '@/components/SeekDetail'
import MyFind from '@/components/MyFind'

//志愿
import Volunteer from '@/components/Volunteer'
import VolunteerDetail from '@/components/VolunteerDetail'
import VolunteerInfo from '@/components/VolunteerInfo'
export default new Router({
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: Index
      },
      {
        path: '/news/',
        name: 'News',
        component: News
      },
      {
        path: '/seek/',
        name: 'Seek',
        component: Seek
      },
      {
        path: '/seek-detail/:seek_id',
        name: 'SeekDetail',
        component: SeekDetail
      },
      {
        path: '/my-find/',
        name: 'MyFind',
        component: MyFind
      },
      {
        path: '/news-detail/:news_id',
        name: 'NewsDetail',
        component: NewsDetail
      },
      {
        path: '/cute-figure/',
        name: 'CuteFigure',
        component: CuteFigure
      },
      {
        path: '/cute-detail/:cute_type',
        name: 'CuteDetail',
        component: CuteDetail
      },
      {
        path: '/cute-push/',
        name: 'CutePush',
        component: CutePush
      },
      {
        path: '/user-information/',
        name: 'UserInformation',
        component: UserInformation
      },
      {
        path: '/my-adoption/:user_id',
        name: 'MyAdoption',
        component: MyAdoption
      },
      {
        path: '/find-information/:user_id',
        name: 'FindInformation',
        component: FindInformation
      },
      {
        path: '/update-information/',
        name: 'UpdateInformation',
        component: UpdateInformation
      },
      {
        path:'/adopt/',
        name:'Adopt',
        component:Adopt
      },
      {
        path:'/adoptInfo/',
        name:'AdoptInfo',
        component:AdoptInfo
      },
      {
        path:'/adopt-detail/:pet_id',
        name:'AdoptDetail',
        component:AdoptDetail
      },
      {
        path:'/volunteer/',
        name:'Volunteer',
        component:Volunteer
      },
      {
        path:'/volunteer-detail/:vol_id',
        name:'VolunteerDetail',
        component:VolunteerDetail
      },
      {
        path:'/volunteer-info/:vol_id',
        name:'VolunteerInfo',
        component:VolunteerInfo
      }
    ],


})
