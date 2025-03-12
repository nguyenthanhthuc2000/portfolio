'use client';

import Container from '@/components/layout/Container';
import ImageWrapper from '@/components/ui/ImageWrapper';
import LaravelFilterSort from '/public/images/logos/laravel-filter-sort.png';
import NickDaoQuan from '/public/images/logos/nickdaoquan.png';
import { StaticImageData } from 'next/image';
import { Language } from '@/lib/types';

interface Translation {
  title: string;
  link: string;
  image: string | StaticImageData;
  description: string;
}

interface PersonalActivity {
  vi: Translation;
  en: Translation;
  ja: Translation;
}

const personalActivitiesData: PersonalActivity[] = [
  {
    vi: {
      title: 'nickdaoquan.vn',
      link: 'https://nickdaoquan.vn',
      image: NickDaoQuan,
      description: 'Hệ thống mua bán tài khoản game online, với giao dịch an toàn, quản lý tài khoản và hỗ trợ khách hàng để giúp người chơi dễ dàng và an toàn trao đổi.',
    },
    en: {
      title: 'nickdaoquan.vn',
      link: 'https://nickdaoquan.vn',
      image: NickDaoQuan,
      description: "An e-commerce platform for buying and selling game accounts, with secure transactions, account management, and customer support to help gamers trade easily and safely.",
    },
    ja: {
      title: 'nickdaoquan.vn',
      link: 'https://nickdaoquan.vn',
      image: NickDaoQuan,
      description: "オンラインゲームアカウントの買い取りと売却のためのeコマースプラットフォーム、安全な取引、アカウント管理、およびゲーマーが容易かつ安全に取引できるように支援するサポート。",
    },
  },
  {
    vi: {
      title: 'laravelwakeup/filter-sort',
      link: 'https://packagist.org/packages/laravelwakeup/filter-sort',
      image: LaravelFilterSort,
      description: 'Filter Sort là gói Laravel mạnh mẽ hỗ trợ tìm kiếm và lọc, tiết kiệm thời gian phát triển.',
    },
    en: {
      title: 'laravelwakeup/filter-sort',
      link: 'https://packagist.org/packages/laravelwakeup/filter-sort',
      image: LaravelFilterSort,
      description: 'Filter Sort is a powerful Laravel package that supports searching and filtering saving your development time.',
    },
    ja: {
      title: 'laravelwakeup/filter-sort',
      link: 'https://packagist.org/packages/laravelwakeup/filter-sort',
      image: LaravelFilterSort,
      description: 'Filter Sort は、開発時間を節約するための強力な Laravel パッケージで、検索とフィルタリングをサポートします。',
    },
  }
];

interface PersonalActivitiesProps {
  personal_project: string;
  lang: Language;
}

export default async function PersonalActivities({
  personal_project,
  lang,
}: PersonalActivitiesProps) {

  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center text-2xl font-medium" id="personal_activities">{personal_project}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {
          personalActivitiesData.map((personalActivity: PersonalActivity, index: number) => {
            const activity = personalActivity[lang];
            return (
              <div 
                key={index}
                className="transition-transform duration-500 md:hover:scale-105 bg-white p-5 shadow-lg max-w-96 w-full rounded-3xl dark:bg-slate-950 dark:bg-opacity-50">
                  <div className="w-full min-h-48 bg-black bg-opacity-20">
                    <ImageWrapper 
                      src={activity.image}
                      className="w-full h-48 object-cover"
                      alt={activity.title}
                    />
                  </div>
                  <div className="py-4">
                    <a href={activity.link} target="_blank" className="font-semibold text-xl">{activity.title}</a>
                    <p className="text-base mt-2 text-justify">
                      {activity.description}
                    </p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}