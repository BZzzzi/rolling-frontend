import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EmojiDisplayList from "@/components/rolling/emoji-display-list";
import {
  CardImgWrapper,
  CardListLayout,
  SwiperWrapper,
  CardWrapper,
  EmojiWrapper,
  WriterCountText,
  ProfileCount,
  EmptySection,
  Title,
  ReceiverName,
} from "@/styles/list-page-styles";

export function CardList({ title, userList, onLoadMore }) {
  return (
    <>
      <CardListLayout>
        <Title>{title}</Title>
        {userList.length === 0 ? (
          <EmptySection>
            아직 작성된 롤링 페이퍼가 없습니다.
            <br />
            새로운 롤링 페이퍼를 만들어 보세요!
          </EmptySection>
        ) : (
          <SwiperWrapper>
            <Swiper
              modules={[Navigation]}
              onReachEnd={() => {
                if (onLoadMore) onLoadMore();
              }}
              navigation={true}
              allowTouchMove={true}
              slidesPerView="auto"
              slidesPerGroup={1}
              spaceBetween={12}
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                  allowTouchMove: false,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
                },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 20,
                  allowTouchMove: false,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
                },
              }}
            >
              {userList.map((it) => {
                return (
                  <SwiperSlide key={it.id}>
                    <CardWrapper
                      bg={it.backgroundColor}
                      bgImg={it.backgroundImageURL}
                    >
                      <div>
                        <ReceiverName>To. {it.name}</ReceiverName>
                        <CardImgWrapper>
                          {it.recentMessages.slice(0, 3).map((it) => (
                            <img src={it.profileImageURL} key={it.id} />
                          ))}
                          {it.messageCount > 3 && (
                            <ProfileCount>+{it.messageCount - 3}</ProfileCount>
                          )}
                        </CardImgWrapper>
                        <WriterCountText>
                          <span>{it.messageCount}</span>명이 작성했어요!
                        </WriterCountText>
                      </div>
                      <EmojiWrapper>
                        <EmojiDisplayList emojis={it.topReactions} />
                      </EmojiWrapper>
                    </CardWrapper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SwiperWrapper>
        )}
      </CardListLayout>
    </>
  );
}
