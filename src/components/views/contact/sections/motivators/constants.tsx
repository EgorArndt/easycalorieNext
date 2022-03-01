import Image from 'next/image'

import { Support, Twitter, Partners } from '@icons'
import { Link } from '@ui'
import person from '@public/persons/community.png'

export const columns = [
    {
      i: <Partners />,
      title: 'Find an expert',
      text: 'Hire a EasyCalorie expert to help build your next big nutrition plan. For general queries, including partnership opportunities, please visit Experts.',
    },
    {
      i: <Image layout='fill' src={person} />,
      title: 'Join our community',
      text: 'For nutrition related threads, join our EasyCalorie Discussions Channel.',
    },
    {
      i: <Twitter />,
      title: 'Follow us on Twitter',
      text: 'Get EasyCalorie\'s news, company information, and media resources at @easycalorie.',
    },
]