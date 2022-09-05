import {Client} from "twitter-api-sdk";
import {findUserByUsername, TwitterResponse} from "twitter-api-sdk/dist/types";

const bearerToken = "AAAAAAAAAAAAAAAAAAAAAIj7ggEAAAAAb3g%2FLRB%2FQEvAw0CpIwW4q0YMalk%3DruXgw488YrW9FuopkqXd6w21haZ2Uwa4H6ZYwHxRdpK85iLJoJ";

const client = new Client(bearerToken);


async function main() {
    const user: TwitterResponse<findUserByUsername> = await client.users.findUserByUsername("charles48011843");
    // user id
    let id = user?.data?.id;
    // fetch user twitter
    const tws = await client.tweets.usersIdTweets(id ?? "", {
        "user.fields": ["created_at"],
        max_results: 100
    });
    tws?.data?.forEach((tweet) => {
        const tweetId = tweet.id;
        const text = tweet.text;
        if (text.includes("点赞，转发")) {
            console.log(tweet)
        }
    })
}

main()