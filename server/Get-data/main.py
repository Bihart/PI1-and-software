#!/usr/bin/env python3
"""
CLI-tool or little program to get data of the web
"""
import requests as rq


def main() -> int:
    """Main function"""
    print("Hola")
    # curl
    # 'https://www.findchips.com/parametric/Sensors%2FTransducers/Pressure%20Sensors?term=soil%20pressure'
    # -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0)
    # Gecko/20100101 Firefox/93.0' -H 'Accept:
    # text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    # -H 'Accept-Language: en-GB,en;q=0.5' --compressed -H 'Referer:
    # https://www.findchips.com/parametric?term=soil%20PRESSUREsensor&nomatch'
    # -H 'Connection: keep-alive' -H 'Cookie:
    # fc_ab=%7B%22ab6%22%3A%22new%22%2C%22ab7%22%3A%22new%22%7D; gcl=; gclsrc=;
    # gclts=; fcUserId=537c05c8-a03d-44f8-92be-5db9f9ac74d4;
    # connect.sid=s%3AdTvW0jgNLfkljXGyaCmweH5V0_JZq1DI.vn0P1jTauahAeYah18HuY7QcmxgTP9hw6P3ME69LU0o'
    # -H 'Upgrade-Insecure-Requests: 1' -H 'Sec-Fetch-Dest: document' -H
    # 'Sec-Fetch-Mode: navigate' -H 'Sec-Fetch-Site: same-origin' -H
    # 'Sec-Fetch-User: ?1'
    url = "https://www.findchips.com/parametric/Sensors%2FTransducers/Pressure%20Sensors"
    paramaters = { "term" : "soil pressure" }
    # term=soil%20pressure
    response.request('GET', url, paramaters)
    return 0


if __name__ == '__main__':
    main()
