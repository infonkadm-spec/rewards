/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Comment from "@/components/comments/comment";
import VSLGray from '@/components/videos/vsl-gray';
import CommentReply from "@/components/comments/comment-reply";

export default function Page7({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {


  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-5 bg-gradient-to-t appear px-2 pt-7 pb-2 from-gray-50 to-gray-200">
        <span className="text-base sm:text-xl font-semibold tracking-tight">
          Watch the video to learn more about how reward platforms work and understand the withdrawal process. ⬇️
        </span>
      </div>
      
      <div className="flex items-center flex-col gap-8 relative">
        <VSLGray />
      </div>

      <div className="text-sm text-center p-2">
        🔊 Check if your sound is activated
      </div>

      <div className="bg-white rounded-xl border">
        <div className="flex items-center justify-between text-gray-600 text-sm border-b p-4">
          <div className="inline-flex items-center justify-center gap-1.5">
            <svg aria-hidden="true" className="w-5 h-5 fill-current text-[#3A559F]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
            </svg>
            <span className="hidden sm:inline">
              Social Facebook Plugin
            </span>
            <span className="inline sm:hidden">
              Facebook
            </span>
          </div>

          <div>
            11 of 2143 comments
          </div>
        </div>

        <div>
          <Comment
            avatar="/comments/person-1.webp"
            name="Sofia García"
            time="7 min ago"
            content="I watched the complete video and learned how reward platforms work. It was informative to understand the process, though results may vary for each person."
            reply
          >
            <CommentReply
              avatar="/comments/person-2.webp"
              name="Julia Alvarenga"
              time="5 min ago"
              content="Thanks for sharing! I&apos;m interested in learning more about these platforms."
            />
            <CommentReply
              avatar="/comments/person-1.webp"
              name="Sofia García"
              time="4 min ago"
              content="The video explains the process step by step. Remember that earnings are not guaranteed and depend on various factors."
            />
          </Comment>
          <Comment
            avatar="/comments/person-3.webp"
            name="Carlos Dal Belo"
            time="15 min ago"
            content="I&apos;ve been researching reward platforms for a while. This guide provides useful information, though individual results can vary significantly."
          />
          <Comment
            avatar="/comments/person-4.webp"
            name="Bernardo Torres"
            time="18 min ago"
            content="Interesting educational content. It&apos;s good to understand how these platforms work before getting involved."
          />
          <Comment
            avatar="/comments/person-5.webp"
            name="María Acosta"
            time="21 min ago"
            content="Has anyone here tried these platforms? What was your experience?"
            reply
          >
            <CommentReply
              avatar="/comments/person-6.webp"
              name="Martina Lopez"
              time="23 min ago"
              content="I&apos;ve tried a few platforms. Results vary a lot - some people may earn small amounts over time, but there&apos;s no guarantee."
            />
          </Comment>
          <Comment
            avatar="/comments/person-7.webp"
            name="Hanna Larissa"
            time="1h ago"
            content="This is a helpful educational guide. It&apos;s important to remember that earnings depend on external platforms and individual activity levels."
          />
        </div>
      </div>
    </>
  );
}
